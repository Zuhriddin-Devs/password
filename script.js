const request = prompt('Password: ********');

const access = () => {
    if (request == 12345678) {
        alert(`:)`);
        window.open();
    } else {
        alert(`:(`);
        window.close();
    };
};

access();