let isBankAccountCopied = false;
function copyBankAccountToClipboard(){
    if(isBankAccountCopied) return;
    isBankAccountCopied = true;
    navigator.clipboard.writeText('ES5315632626373261283080');
    let button = document.getElementById("copy-bank-account-button");
    const prevHtml = button.innerHTML;
    button.innerHTML = '¡Copiado!'

    setTimeout(function(){
        button.innerHTML = prevHtml;
        isBankAccountCopied = false;
    }, 3000)
}