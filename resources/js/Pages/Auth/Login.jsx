import React, {useEffect} from 'react';
import Checkbox from '@/Components/Inputs/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/Inputs/InputError';
import InputLabel from '@/Components/Inputs/InputLabel';
import TextInput from '@/Components/Inputs/TextInput';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import {
  EmailOutlined,
  AccountBoxOutlined,
  VpnKeyOutlined,
} from '@mui/icons-material';
import '../../../css/login.css';
import {Button} from '@mui/material';

export default function Login({status, canResetPassword}) {
  const {data, setData, post, processing, errors, reset} = useForm({
    email: '',
    password: '',
    remember: '',
  });

  useEffect(() => {
    return () => {
      reset('password');
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('login'));
  };

  return (
    <GuestLayout title="Login">
      <Head>
        <title>Log in</title>
      </Head>
      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}
      <div style={{display: 'flex'}}>
        <AccountBoxOutlined
          style={{height: '30%', width: '30%', marginTop: '7%'}}
        />
        <form onSubmit={submit}>
          <div>
            <InputLabel forInput="email">Email</InputLabel>
            <div style={{display: 'flex'}}>
              <EmailOutlined className={'input-icon'} />
              <TextInput
                type="text"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="username"
                isFocused={true}
                handleChange={onHandleChange}
              />
            </div>
            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <InputLabel forInput="password" value="Password" />
            <div style={{display: 'flex'}}>
              <VpnKeyOutlined className={'input-icon'} />
              <TextInput
                type="password"
                name="password"
                secureTextEntry
                value={data.password}
                className="mt-1 block w-full"
                autoComplete="current-password"
                handleChange={onHandleChange}
              />
            </div>
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="block mt-4">
            <label className="flex items-center">
              <Checkbox
                name="remember"
                value={data.remember}
                handleChange={onHandleChange}
              />

              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div className="flex items-center justify-end mt-4">
            {canResetPassword && (
              <Link
                href={route('password.request')}
                className="underline text-sm pr-4 text-gray-600 hover:text-gray-900"
              >
                Forgot your password?
              </Link>
            )}

            <Button
              type={'submit'}
              style={{backgroundColor: 'rgba(75, 0, 130, 0.3)', color: 'black'}}
              className="ml-8"
            >
              Log in
            </Button>
          </div>
        </form>
      </div>
    </GuestLayout>
  );
}
