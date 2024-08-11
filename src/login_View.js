import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

// export default function View_Login() {
//     return (
//         <div>
//             <Stack
//                 direction='column'
//                 divider={<Divider orientation='horizontal' flexItem />}
//                 spacing={2}
//                 >

//                 <TextField id='filled-basic' label='Benutzername' variant='filled' />

//             </Stack>
//         </div>
//     )
// }

const OnButtonClick = () => {
    return (
        <div>
            <Stack
                direction='column'
                divider={<Divider orientation='horizontal' flexItem />}
                spacing={2}
                >

                <TextField id='filled-basic' label='Benutzername' variant='filled' />

            </Stack>
        </div>
    )
}

export default OnButtonClick;