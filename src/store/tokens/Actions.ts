//adição do token para ser validado na API.

export type Action = {type: "ADD_TOKEN"; payload: string};
//Quando criado a Action são duas propriedades agregadas o Type e o tipo de aplicação que a Action está levando

export const addToken = (token: string): Action =>({
    type: "ADD_TOKEN",
    payload: token,
});