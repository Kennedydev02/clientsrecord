import { auth } from '../firebase';
import { getFirestore, doc, getDoc, updateDoc, collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const db = getFirestore();
const storage = getStorage();

export const clientService = {
  async getClientDetails(clientId) {
    try {
      const docRef = doc(db, 'clients', clientId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { success: true, data: docSnap.data() };
      }
      return { success: false, error: 'Client not found' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async updateClient(clientId, data) {
    try {
      const docRef = doc(db, 'clients', clientId);
      await updateDoc(docRef, data);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async uploadDocument(clientId, file) {
    try {
      const storageRef = ref(storage, `documents/${clientId}/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      // Save document reference to Firestore
      await addDoc(collection(db, 'clients', clientId, 'documents'), {
        name: file.name,
        url: url,
        uploadedAt: new Date(),
        type: file.type
      });

      return { success: true, url };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async getPaymentHistory(clientId) {
    try {
      const payments = [];
      const querySnapshot = await getDocs(collection(db, 'clients', clientId, 'payments'));
      querySnapshot.forEach((doc) => {
        payments.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: payments };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async getClients(filters = {}) {
    try {
      let q = collection(db, 'clients');
      
      if (filters.status) {
        q = query(q, where('status', '==', filters.status));
      }
      
      if (filters.dateRange) {
        q = query(q, 
          where('applicationDate', '>=', filters.dateRange[0]),
          where('applicationDate', '<=', filters.dateRange[1])
        );
      }

      const querySnapshot = await getDocs(q);
      const clients = [];
      querySnapshot.forEach((doc) => {
        clients.push({ id: doc.id, ...doc.data() });
      });
      
      return { success: true, data: clients };
    } catch (error) {
      return { success: false, error: error.message };
    }
  },

  async getClientTimeline(clientId) {
    try {
      const timelineRef = collection(db, 'clients', clientId, 'timeline');
      const querySnapshot = await getDocs(timelineRef);
      const timeline = [];
      querySnapshot.forEach((doc) => {
        timeline.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: timeline };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}; 