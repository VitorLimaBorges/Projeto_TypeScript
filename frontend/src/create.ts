import htpp from "./helpers/http"

function create(){
    return{
        user:{
            fistName:"",
            lastName:"",
            email:"",
            password:"",
        },
        createUser: async function(){
            try {
                const {data} = await htpp.post('user/create', this.user);
                console.log(data);
            } catch (error) {
                if(error.response?.data?.errors){

                }
                console.log();
            }
        },
    };
}

export default create;