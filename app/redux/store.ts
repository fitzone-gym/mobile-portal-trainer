import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';

import userReducer from './features/userSlice'

const persistConfig = {
    key: '@FIT_ZONE_MEMBER_APP_CURRENT_USER',
    storage: AsyncStorage,
    whiteList: ['user']
};

const reducers = combineReducers({
    user: userReducer
}) 

const presistReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: presistReducer,
    devTools:true,
    middleware: [thunk]
})

export default store;
export const pstore = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<appDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
