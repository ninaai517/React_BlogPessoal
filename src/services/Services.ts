import axios from 'axios';

/*Export const 'nome do objeto' = axios.create (sendo o CREATE um verbo Http) ({
   baseURL -> é uma propriedade que armazena o end. da API.
})*/
export const api= axios.create({
    baseURL:'https://blogpessoalninaaizawa.herokuapp.com'
})

    export const cadastroUsuario= async(url: any, dados: any, setDado: any)=> {
        const resposta = await api.post(url, dados)
        setDado(resposta.data)
    }

    /*criar o objeto login onde ele recebe alguns parâmetros:
       1- url -> será concatenado com a baseURL (+ route de login).
       2- dados -> contém os dados que serão enviados para API users + password, passados via body um object JSON com 
        ...essas informações; Imaginar que o objeto JSON está dentro desse par. "dados".
       3- setDados -> é uma função que receberá a RESPONSE da API. Isto é, um obj. JSON contendo os dados
       ...do usuário + token 
    */
    export const login= async(url: any, dados: any, setDado: any)=> {
        //async -> necessita do tempo de resposta da API para acionar a função setDado
        
        const resposta = await api.post(url, dados) //-> está acionando o mét. post da API através dos par. url e dados.
        setDado(resposta.data.token)
    }

    //...4- header -> é um parâmetro que 
    export const busca = async(url: any, setDado: any, header: any)=>{
        const resposta = await api.get(url, header)
        setDado(resposta.data)
    }

    //método Get (buscar)
    export const buscaId = async(url: any,setDado: any, header: any) => { 
        const resposta = await api.get(url,header)
        setDado(resposta.data)
    }

    //inserir informações na API. Post
    export const post = async(url: any, dados: any, setDado: any, header: any) => { 
        const resposta = await api.post(url,dados,header)
        setDado(resposta.data)
    }

    //Mét. Put (atualizar) dados na API. 
    export const put = async(url: any, dados: any, setDado: any, header: any) => { 
        const resposta = await api.put(url,dados,header)
        setDado(resposta.data)
    }

    //Mét. Delete. Envia a rota e o token nesta requisição. 
    export const deleteId = async(url: any,header: any) => { 
        await api.delete(url,header)
    }



