import axios from 'axios';



const useAccountService=(ACCOUNT_API_BASE_URL) =>{

    const getAccount=()=>{
        return axios.get(ACCOUNT_API_BASE_URL);
    }

    const createAccount=(account)=>{
        return axios.post(ACCOUNT_API_BASE_URL, account);
    }

    const getAccountId=(accountId)=>{
        return axios.get(ACCOUNT_API_BASE_URL + '/' + accountId);
    }

    const updateAccount=(account, accountId)=>{
        return axios.put(ACCOUNT_API_BASE_URL + '/' + accountId, account);
    }

    const deleteAccount=(accountId)=>{
        return axios.delete(ACCOUNT_API_BASE_URL + '/' + accountId);
    }
    return[getAccount,createAccount,getAccountId,updateAccount,deleteAccount]
}

export default useAccountService