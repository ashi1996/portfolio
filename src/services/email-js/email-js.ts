import emailjs from '@emailjs/browser';

export const sedEmail = (templateParams:  Record<string, unknown>, templateId = "template_pavv3gs") => {
    emailjs.send('service_qqa9ml5', templateId, templateParams, 'gRdRRvGJClCo6ThfF')
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}