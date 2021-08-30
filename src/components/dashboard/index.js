import React from 'react'
import { Alert, Button, Divider, Drawer } from 'rsuite'
import { useProfile } from '../../context/profile.context'
import { database } from '../../misc/firebase';
import EditableInput from '../EditableInput';
import ProviderBlock from './ProviderBlock';

const Dashboard = ({onSignOut}) => {
    const {profile} = useProfile();

    const onSave = async (newData) => {
        const userNickNameRef = database.ref(`/profiles/${profile.uid}`).child('name');

        try {
            await userNickNameRef.set(newData);
            Alert.success("Nickname Changed Successfully",4000)
        } catch (error) {
            Alert.error(error.message,4000)
        }
    }

    return (
        <div>
            <Drawer.Header>
                <Drawer.Title>
                    Dashboard
                </Drawer.Title>

            </Drawer.Header>

            <Drawer.Body>
                <h3>hey, {profile.name} welcome back :)</h3>
                <ProviderBlock />
                <Divider />
                <EditableInput
                 name="nickname"
                 initialValue = {profile.name}
                 onSave = {onSave}
                 label={<h6 className="mb-2">NickName</h6>}
                />
            </Drawer.Body>

            <Drawer.Footer>
                <Button block color="red" onClick = {onSignOut}>Sign out</Button>
            </Drawer.Footer>


        </div>
    )
}

export default Dashboard
