import $ from "jQuery";

class Modal {
    constructor() {
        this.openModalButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalButton = $(".modal__close");
        this.events();
    }

    events() {
        //click the open modal button
        this.openModalButton.click(this.openModal.bind(this));

        //clicking the close button
        this.closeModalButton.click(this.closeModal.bind(this));

        //escape from any key press
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(event) {
        if (event.keyCode == 27) {
            this.closeModal();
        }
    }
    
    openModal() {
        this.modal.addClass("modal--is-visible");
        return false;
    }

    closeModal() {
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;