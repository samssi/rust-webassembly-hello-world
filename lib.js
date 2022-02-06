import('./pkg/').then((lib) => {
    const rootElement = document.getElementById('root');
    if(!rootElement) {
        throw new Error('Application failure: no root element!');
    }
    const resultDiv = document.createElement('div');
    resultDiv.innerText = `${lib.main()}`;
    rootElement.appendChild(resultDiv);
})