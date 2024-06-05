function signup(event){

    event.preventDefault();

    const username = document.getElementById('signup-username').value;

    const password = document.getElementById('signup-password').value;

    const existingUser = users.find( parametroUser => parametroUser.username === username);

    if(existingUser){
        console.log('usuário já existente');
        alert('Este usuário já existe. Por favor, escolha outro nome de usuário');
        return

    }

    users.push({username, password});

    localStorage.setItem('users', JSON.stringify(users))

    console.log('novo ser cadastrado', {username, password});
    alert ('Usuário cadastrado com sucesso!')

    document.getElementById('signup-form').reset();

    function login(event) {
        event.preventDefault();

        const username = document.getElementById('signup-username').value;

        const password = document.getElementById('signup-password').value;

        const existingUser = users.find(parametroUser => parametroUser.username === username && parametroUser.password === password
        );

        if(existingUser){
            console.log('deu boa, chefe: ', existingUser);
            alert('Login bem sucedido!')
        } else {
            console.log('deu ruim, nub');
            alert('Usuário ou senha incorretos!')
        }
        document.getElementById('login-forms').reset();

        let users = JSON.parse(localStorage.getItem('users')) || []

        document.getElementById('signup-form').addEventListener('submit', signup)
        document.getElementById('login-form').addEventListener('submit', login)
    }


}