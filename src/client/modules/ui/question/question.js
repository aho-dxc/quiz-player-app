import { LightningElement, api } from 'lwc';

export default class Question extends LightningElement {
    @api question;
    isSaving;

    connectedCallback() {
        this.isSaving = false;
    }

    handleAnswerClick(event) {
        // Prevent duplicate answers
        if (this.isSaving) {
            return;
        }
        this.isSaving = true;
        // Send answer to parent component
        const { answer } = event.target.dataset;
        const answerEvent = new CustomEvent('answer', {
            detail: {
                answer
            }
        });
        this.dispatchEvent(answerEvent);
    }
    /*
    IsCoicesQuestion(){
        if (question.RecordType == 'Choices'){
            return true;
        } else {
            return false;
        }
    }

    
    IsFreeTextQuestion(){
        if (question.RecordType == 'Free_Text'){
            return true;
        } else {
            return false;
        }
    }*/
}
