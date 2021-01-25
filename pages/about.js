import React from 'react'
import styles from '../styles/About.module.css'

const about = ({ people }) => {
  return (
    <section className={styles.grid}>
      {people.map((person) => {
        const { id, login, avatar_url, html_url } = person

        return (
          <div key={id}>
            <div className={styles.box}>
              <div className={styles.avatar}>
                <img src={avatar_url} alt={login} />
                <h3>{login}</h3>
              </div>
              <a href={html_url} className={styles.link}>
                Profile
              </a>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://api.github.com/users`)
  const people = await res.json()
  console.log(people)

  return {
    props: {
      people,
    },
  }
}

export default about
