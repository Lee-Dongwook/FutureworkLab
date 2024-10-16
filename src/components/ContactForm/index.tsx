'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import cx from 'classnames';

interface FormData {
  lastName: string;
  firstName: string;
  company: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const res = await fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => res.json());

    if (res.status === 'error') {
      setError(res.message);
    } else {
      setSuccess(true);
    }
  };

  if (success) {
    return (
      <p className="font-semibold text-green-600">
        문의해 주셔서 감사합니다.
        <br />
        답변을 드리기까지 잠시만 기다려 주세요.
      </p>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block font-medium text-gray-700" htmlFor="lastName">
            성
          </label>
          <input
            className={cx(
              'mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
              {
                'border-red-500': errors.lastName,
              },
            )}
            type="text"
            id="lastName"
            {...register('lastName', { required: '성을 입력해주세요.' })}
          />
          {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700" htmlFor="firstName">
            이름
          </label>
          <input
            className={cx(
              'mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
              {
                'border-red-500': errors.firstName,
              },
            )}
            type="text"
            id="firstName"
            {...register('firstName', { required: '이름을 입력해주세요.' })}
          />
          {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700" htmlFor="company">
            회사명
          </label>
          <input
            className={cx(
              'mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
              {
                'border-red-500': errors.company,
              },
            )}
            type="text"
            id="company"
            {...register('company', { required: '회사명을 입력해주세요.' })}
          />
          {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700" htmlFor="email">
            이메일
          </label>
          <input
            className={cx(
              'mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
              {
                'border-red-500': errors.email,
              },
            )}
            type="email"
            id="email"
            {...register('email', { required: '이메일을 입력해주세요.' })}
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block font-medium text-gray-700" htmlFor="message">
            메시지
          </label>
          <textarea
            className={cx(
              'mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm',
              {
                'border-red-500': errors.message,
              },
            )}
            id="message"
            rows={5}
            {...register('message', { required: '메시지를 입력해주세요.' })}
          />
          {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-sm text-red-500">{error}</p>
        <input
          type="submit"
          value="보내기"
          className="inline-flex cursor-pointer justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        />
      </div>
    </form>
  );
}
