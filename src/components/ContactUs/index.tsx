import React, { useState } from 'react'
import styles from './styles.module.scss'
import { SubTitle } from '../SubTitle'
import { TextInput } from '../TextInput'

type ContactUsProps = {}

export const ContactUs = ({}: ContactUsProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <SubTitle>Nos contate</SubTitle>

        <div className={styles.contactDetails}>
          <span>
            <svg
              className="icons-phone"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_896_58)">
                <path
                  d="M21 16.42V19.956C21.0001 20.2092 20.9042 20.453 20.7316 20.6382C20.559 20.8234 20.3226 20.9363 20.07 20.954C19.633 20.984 19.276 21 19 21C10.163 21 3 13.837 3 5C3 4.724 3.015 4.367 3.046 3.93C3.06372 3.67744 3.17658 3.44101 3.3618 3.26841C3.54703 3.09581 3.79082 2.99989 4.044 3H7.58C7.70404 2.99987 7.8237 3.04586 7.91573 3.12902C8.00776 3.21218 8.0656 3.32658 8.078 3.45C8.101 3.68 8.122 3.863 8.142 4.002C8.34073 5.38892 8.748 6.73783 9.35 8.003C9.445 8.203 9.383 8.442 9.203 8.57L7.045 10.112C8.36445 13.1865 10.8145 15.6365 13.889 16.956L15.429 14.802C15.4919 14.714 15.5838 14.6509 15.6885 14.6237C15.7932 14.5964 15.9042 14.6068 16.002 14.653C17.267 15.2539 18.6156 15.6601 20.002 15.858C20.141 15.878 20.324 15.9 20.552 15.922C20.6752 15.9346 20.7894 15.9926 20.8724 16.0846C20.9553 16.1766 21.0012 16.2961 21.001 16.42H21Z"
                  fill="#F9F9F9"
                />
              </g>
              <defs>
                <clipPath id="clip0_896_58">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>+55 99823-3232</p>
          </span>

          <span>
            <svg
              className="icons-email"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_896_73)">
                <path
                  d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM12.06 11.683L5.648 6.238L4.353 7.762L12.073 14.317L19.654 7.757L18.346 6.244L12.061 11.683H12.06Z"
                  fill="#F9F9F9"
                />
              </g>
              <defs>
                <clipPath id="clip0_896_73">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>contato@onebitmusic.com</p>
          </span>
        </div>

        <svg
          className={styles.effect}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 224 232"
          fill="none"
        >
          <path
            d="M15 232C15 116.572 108.572 23 224 23V23V232H15V232Z"
            fill="#F9F9F9"
          />
          <circle cx="60" cy="60" r="60" fill="#464646" />
          <g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.9999 120C93.137 120 120 93.1373 120 60.0002C120 56.9603 119.774 53.9731 119.338 51.0547C90.608 67.7083 66.2105 91.0079 48.2485 118.85C52.0487 119.604 55.9781 120 59.9999 120Z"
              fill="#464646"
            />
          </g>
        </svg>
      </div>

      <form className={styles.form}>
        <h3>Preencha com seus dados</h3>

        <div className={styles.containerField}>
          <TextInput
            label="Nome"
            setValue={setName}
            value={name}
            key={'Name-Input'}
          />
          <TextInput
            label="Email"
            setValue={setEmail}
            value={email}
            key={'email-Input'}
          />
          <TextInput
            label="Mensagem"
            setValue={setMensagem}
            value={mensagem}
            key={'Mensagem-Input'}
          />
        </div>

        <button>Enviar</button>
      </form>
    </section>
  )
}
