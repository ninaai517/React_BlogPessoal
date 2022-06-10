//Armazenamento do STORE: conteiner que irá gerenciar todos os STATES da api;

import {legacy_createStore as createStore} from 'redux';
import { tokenReducer } from './tokens/TokensReducer';

const store = createStore(tokenReducer);

export default store;