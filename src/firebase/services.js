import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { 
  doc, 
  setDoc, 
  getDoc, 
  collection, 
  query, 
  orderBy, 
  limit, 
  getDocs,
  addDoc,
  updateDoc,
  increment
} from "firebase/firestore";
import { auth, db } from "./config";

// --- Auth Services ---

export const signup = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  
  // Create user profile in Firestore
  await setDoc(doc(db, "users", user.uid), {
    name,
    email,
    totalScore: 0,
    testsAttempted: 0,
    createdAt: new Date().toISOString()
  });
  
  return user;
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

// --- User Profile Services ---

export const getUserProfile = async (uid) => {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// --- Question Services ---

export const getQuestions = async (category = 'chapter') => {
  const q = query(collection(db, "questions")); // Fetch all for now, filter in memory or setup specific queries
  const querySnapshot = await getDocs(q);
  const questions = [];
  querySnapshot.forEach((doc) => {
    questions.push({ id: doc.id, ...doc.data() });
  });
  return questions;
};

// --- Result Services ---

export const saveTestResult = async (userId, score, correct, total, category) => {
  // Save to results collection
  await addDoc(collection(db, "results"), {
    userId,
    score,
    correct,
    total,
    category,
    timestamp: new Date().toISOString()
  });
  
  // Update user stats
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    totalScore: increment(score),
    testsAttempted: increment(1)
  });
};

// --- Leaderboard Services ---

export const getLeaderboard = async () => {
  const usersRef = collection(db, "users");
  const q = query(usersRef, orderBy("totalScore", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  const leaderboard = [];
  querySnapshot.forEach((doc) => {
    leaderboard.push(doc.data());
  });
  return leaderboard;
};
