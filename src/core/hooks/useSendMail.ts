import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { sedEmail } from '../../services/email-js/email-js';

interface UseSendMail {
    sendExecute : (OptionalParams  : Send) => void
}

interface Send {
    newTemplateParams ?: Record<string, any>,
    sendJustOneTime ?:boolean
}

const useSendMail = (emailTemplateObject : {id: number, template: string, label?: string}) : UseSendMail => {
 
    const { darkMode, magicWand } = useAppSelector(state=> state.appState);


    const defaultTemplateParams = {
        isMobile : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        ),
        windowWidth : window.innerWidth || null,
        date : new Date().toLocaleString(),
        isDarkMode : darkMode,
        isMagicWand : magicWand,
    };


    const sendExecute = (OptionalParams : Send ) => {

        const { newTemplateParams = {}, sendJustOneTime = false} = OptionalParams;
        
        if(sendJustOneTime){
            const isEmailSent = localStorage.getItem(`${emailTemplateObject.template}_${emailTemplateObject.id}`);
            if(isEmailSent){
                return
            }
            localStorage.setItem(`${emailTemplateObject.template}_${emailTemplateObject.id}`, 'Sent');
        }
        sedEmail( {...defaultTemplateParams, ...newTemplateParams} , emailTemplateObject.template)
    }

    return { sendExecute }
};

export default useSendMail;
