// You can find the form ID in the URL of this page
// https://tally.so/forms/mVX06w/share
const BUS_FORM_ID = 'mVX06w';
const BUS_FORM_OPTIONS = {
    /*
    emoji: {
        text: '🚌',
        animation: 'heart-beat' //'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
    },
    */
    overlay: true,
    layout: 'modal',
    width: 500,
    autoClose: 1000,
    onOpen: () => {
        console.log('Bus form oppened');
    },
    onClose: () => {
        console.log('Bus form closed');
    },
    onSubmit: (payload) => {
        console.log('Bus form submitted', payload);
    }
};

function openBusForm(){
    Tally.openPopup(BUS_FORM_ID, BUS_FORM_OPTIONS);
}

// Open the popup

// Available options
/*
class PopupOptions {
  layout?: 'default' | 'modal';
  width?: number;
  alignLeft?: boolean;
  hideTitle?: boolean;
  overlay?: boolean;
  emoji?: {
    text: string;
    animation: 'none' | 'wave' | 'tada' | 'heart-beat' | 'spin' | 'flash' | 'bounce' | 'rubber-band' | 'head-shake';
  };
  autoClose?: number;
  customFormUrl?: string;
  hiddenFields?: {
    [key: string]: any,
  };
  onOpen?: () => void;
  onClose?: () => void;
  onPageView?: (page: number) => void;
  onSubmit?: (payload: any) => void;
};
*/

// Example: open a popup with default options

// Example: opening a popup as a centered modal
/*
Tally.openPopup('mVX06w', {
  layout: 'modal', // Open as a centered modal
  width: 700, // Set the width of the modal
  autoClose: 5000, // Close the popup 5 seconds after form was submitted (in ms)
});
*/

// Example: set custom hidden fields
/*
Tally.openPopup('mVX06w', {
  hiddenFields: {
    ref: 'downloads',
    email: 'alice@example.com'
  }
});
*/

// Close the popup
//Tally.closePopup('mVX06w');