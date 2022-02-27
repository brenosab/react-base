import React from 'react';

import { Container, Content } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signin: React.FC = () => {
    return (
        <Container>
            <Content>
                <form>
                    <h1>Faça seu login</h1>
                    <Input name='email' placeholder='E-mail' autoComplete='false'/>
                    <Input name='password' type='password' placeholder='Senha'/>
                    <Button 
                        type='button'
                        text='text' 
                        onClick={() => {console.log('do nothing')}}
                        children = "Acessar"
                    />
                </form>
            </Content>
        </Container>
    );
}

export default Signin;
