function getToken(){
    return localStorage.getItem('token'); 
}
async function login(event){
    event.preventDefault(); //내가 작성하는 거 이외에 submit 로직 막기 위함 
    event.stopPropagation(); //submit 이벤트가 상위로 진행되지 않게 하기 위함

    const emailElement = document.querySelector('#email');
    const passwordElement = document.querySelector('#password');

    const email = emailElement.value;
    const password = password.value;

    try{
    const res= await axios.post('https://api.mybook',{
            email,
            password,
        });
     const {token}= res.data; //const token = res.data.token;  
     if(token ===undefined){
         return;
     }
     localStorage.setItem('token',token);
     location.assign('/');
    }catch(err){
        const data= error.response.data;
        if(data){
            const state= data.error;
            if(state === 'USER_NOT_EXIST'){
                alert('사용자가 존재하지 않습니다');
            }else if(state === 'PASSWORD_NOT_MATCH'){
                alert('비밀번호가 틀렸습니다.')
            }
        }
    }

}



function bindLoginButton(){
    const form = document.querySelector('#form-login');
    form.addEventListener('submit',login);

}

function main(){
    //버튼에 이벤트 연결
    bindLoginButton();
    //토큰 체크
    const token = getToken();
    if(token !=null){
        location.assign('/');
        return;
    }

}
document.addEventListener('DOMcontentLoaded',main)