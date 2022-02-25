import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { TextField, FormControl, InputAdornment } from '@mui/material';
const AddTodo = () => {
    return (
        <div>
            <FormControl fullWidth variant="filled">

                <Stack mt={3} direction='row' spacing={2}>
                    <TextField fullWidth label="Type what you need to do..." variant="filled"
                        inputProps={{
                            endadornment: <InputAdornment position="end" >
                                <IconButton>
                                    <ClearIcon />
                                </IconButton>
                            </InputAdornment>
                        }}
                    />
                    <IconButton aria-label="check">
                        <CheckIcon />
                    </IconButton>
                </Stack>
            </FormControl>
        </div>
    )
}

export default AddTodo
