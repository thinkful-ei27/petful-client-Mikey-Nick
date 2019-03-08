import { dogReducer } from './dog.js';
import { catReducer } from './cat.js';
import { combineReducers } from 'redux';

export const adoptReducer = 
combineReducers({ dog: dogReducer, cat: catReducer })