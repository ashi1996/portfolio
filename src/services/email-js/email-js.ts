import emailjs from '@emailjs/browser';

export const sedEmail = (templateParams:  Record<string, unknown>, templateId : string) => {
    emailjs.send(process.env.REACT_APP_SERVICE_ID || '', templateId, templateParams, process.env.REACT_APP_PUBLIC_KEY || '')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}