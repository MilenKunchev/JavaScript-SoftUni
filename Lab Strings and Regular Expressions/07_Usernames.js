function usernames(emails) {

    let usernames = [];

    for (let email of emails) {

        let [name, mail] = email.split('@');

        let username = name += '.' + mail.split('.').map(e => e[0]).join('');
        usernames.push(username);

        // Or usernames.push(name += '.' + mail.split('.').map(e => e[0]).join(''));
    }
    console.log(usernames.join(', '));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);