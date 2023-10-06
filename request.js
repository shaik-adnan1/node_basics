function encrypt(data) {
    return 'encrypt data ' + data
}

function send(url, data) {
    const encryptData = encrypt(data);
    console.log(`sending encrypted data: ${encryptData}`)
}

module.exports = {
    send
}