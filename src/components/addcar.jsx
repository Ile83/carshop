import React from "react";
import { Button, useThemeProps } from "@mui/material";
import { TextField } from "@mui/material";
import { Dialog } from "@mui/material";
import { DialogActions } from "@mui/material";
import { DialogContent } from "@mui/material";
import { DialogTitle } from "@mui/material";



export default function Addcar(props) {

    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', modelYear: '', price: ''
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setCar({...car, [event.target.name]: event.target.value});

    }

    const newCar = () => {
        props.saveCar(car)
        handleClose();
    }


    return (
        <div>
        <Button style= {{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
          Add car
        </Button>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title">

          <DialogTitle id="form-dialog-title">New Car</DialogTitle>
            <DialogContent>
            <TextField
              autoFocus
              required
              margin="dense"
              name="brand"
              value={car.brand}
              onChange={e => handleInputChange(e)}
              label="brand"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              name="model"
              value={car.model}
              onChange={e => handleInputChange(e)}
              label="model"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              name="color"
              value={car.color}
              onChange={e => handleInputChange(e)}
              label="color"
              fullWidth
            />
                     <TextField
            required
            margin="dense"
            name="fuel"
            value={car.fuel}
            onChange={e => handleInputChange(e)}
            label="fuel"
            fullWidth
            />
            <TextField
            required
            margin="dense"
            name="modelYear"
            value={car.modelYear}
            onChange={e => handleInputChange(e)}
            label="year"
            fullWidth
            />
            <TextField
            required
            margin="dense"
            name="price"
            value={car.price}
            onChange={e => handleInputChange(e)}
            label="price"
            fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={newCar} color="primary">
                Save
            </Button>
          </DialogActions>
        </Dialog>
        </div>
    );
}