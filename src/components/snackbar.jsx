import React from 'react';

import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar(props) {
        

        return (

                <div>
                  <Snackbar //Lähde Mui dokumentaatio
                  open={open}
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    message="Car deleted"
                    />
                </div> 
                   
                );

}

