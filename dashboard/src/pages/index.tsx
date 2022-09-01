import Head from "next/head";
import Image from "next/image";
import { Lock, User } from "phosphor-react";
import { FormEvent, useState } from "react";
import homeImage from "../../public/homeImage.svg";
import logoWithLine from "../../public/logoWithLine.svg";
import { Input } from "../components/Input";

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(evt: FormEvent) {
    evt.preventDefault();

    console.log(email, password);
  }

  return (
    <>
      <Head>
        <title>Dashboard DevLândia | Login</title>
      </Head>
      <div className="w-full h-screen flex">
        <div className="w-[53%] h-full bg-gradient-to-br from-blue-350 via-blue-450 to-purple-750 flex flex-col justify-between">
          <h1 className="text-5xl font-medium text-white ml-12 mt-32">
            Dashboard
          </h1>
          <div className="w-full flex items-end justify-end">
            <Image src={homeImage} alt="" />
          </div>
        </div>
        <div className="w-[47%] h-full bg-gray-950 flex flex-col items-center pt-24">
          <Image src={logoWithLine} alt="" />
          <form 
            onSubmit={handleLogin}
            method="post"
            className="flex flex-col items-center mt-24 gap-5"
          >
            <Input 
              placeholder="Email"
              name="email"
              type="email"
              icon={<User size={19} className="text-gray-350" weight="fill" />} 
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <Input
              placeholder="Password"
              name="password"
              type="password" 
              icon={<Lock size={19} className="text-gray-350" weight="fill" />} 
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
            />

            <button
              className="my-3 w-48 h-14 flex justify-center items-center rounded-md bg-gradient-to-r from-blue-350 to-purple-750 text-xl text-white hover:brightness-90 transition" 
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}