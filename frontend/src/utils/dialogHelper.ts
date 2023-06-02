const openDialog = function(dialogId: string) {
    const dialogElement: HTMLDialogElement = document.getElementById(dialogId) as HTMLDialogElement;
    if (!dialogElement.hasAttribute("open")) {
        dialogElement.showModal();
    }
};


const closeDialog = function(dialogId: string) {
    const dialogElement: HTMLDialogElement = document.getElementById(dialogId) as HTMLDialogElement;
    dialogElement.close();
};

const dialogHelper = {
    openDialog: openDialog,
    closeDialog: closeDialog
};

export default dialogHelper;
