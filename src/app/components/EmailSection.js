"use client";
import React from 'react'
import GithubIcon from "../../../public/brands-github.svg"
import LinkedInIcon from '../../../public/brands-linkedin-in.svg'
import Link from "next/link"
import Image from "next/image"

const EmailSection = () => {
  const handleSubmit = async (e) => {
    e.preventDefault(); // // 阻止表单默认提交行为

    // 从事件对象中获取表单数据
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
      name: e.target.name.value,
    }

    // 将数据转换为 JSON 格式
    const JSONdata = JSON.stringify(data);

    // 定义 API 端点和选项
    const endpoint = "/api/send";
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }
    // 发起 POST 请求到指定的 API 端点
    const response = await fetch(endpoint, options);

    // 解析 JSON 响应数据

    const resData = await response.json();
    console.log(resData);
    if (response.status === 200) {
      console.log("Message sent.");
    }
  }

  return (
    <div id='contact' className='grid md:grid-cols-2 my-12 mx-12 md:my-12 md:mx-16 py-24 gap-4'>
      <div>
        <div className='flex md:items-start md:justify-start'>
            <Image 
                src="/images/xiyang2.jpg"
                alt='person image'
                width={300}
                height={300}
                className='w-[200px] h-[200px] rounded-full md:w-[300px] md:h-[300px] mb-12 shadow-2xl'
            />
            
                
        </div>
        <h5 className='text-4xl font-bold text-custom-pink my-2'>Let&apos;s Connect</h5>
        <p className='text-black mb-4 max-w-md text-xl'>
            {" "}
            I&apos;m currently looking for new opportunities, my inbox is always open. 
            Whether you have a question, an opportunity or just want to connect and say hi, I&apos;ll get back to you as soon as possible!
        </p>

        <div className='socials flex flex-row gap-6'>
            <Link href="https://github.com/XIYANG1018">
                <Image src={GithubIcon} alt="Github Link" className="w-6 h-6" />
            </Link>
            <Link href="https://www.linkedin.com/in/xi-yang-seeking-intern/">
                <Image src={LinkedInIcon} alt="LinkedIn Link" className="w-6 h-6" />
            </Link>
        </div>
      </div>

      <div className='pt-20'>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <div className='mb-6'>
                <label htmlFor='name' className='text-black block mb-2 text-xl font-medium'>Your Name</label>
                <input name='name' type='text' id='name' required className='border-[#33353F] placeholder-[#9CA2A9]s text-gray-500 w-full'/>
            </div>
            
            <div className='mb-6'>
                <label htmlFor='email' className='text-black block mb-2 text-xl font-medium'>Your Email</label>
                <input name='email' type='email' id='email' required placeholder='jacob@gmail.com' className='border-[#33353F] placeholder-[#9CA2A9]s text-gray-500 w-full'/>
            </div>
            <div className='mb-6'>
                <label htmlFor='subject' className='text-black block mb-2 text-xl font-medium'>Subject</label>
                <input name='subject' type='text' id='subject' required placeholder='Interview Invitation' className='border-[#33353F] placeholder-[#9CA2A9]s text-gray-500 w-full'/>
            </div>
            <div className='mb-6'>
                <label htmlFor='message' className='text-black block mb-2 text-xl font-medium'>Message</label>
                <textarea name='message' id='message' required placeholder='Hello Xi...' className='border-[#33353F] placeholder-[#9CA2A9]s text-gray-500 w-full'/>
            </div>
            <button type='submit' className='bg-custom-pink text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default EmailSection
