function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    //  ✨ do your magic here
    const mainAnchor = document.createElement('nav')
    links.forEach(link => {
      const a = document.createElement("a")
      a.href = link.href;
      a.title = link.title;
      a.textContent = link.textContent;
      mainAnchor.appendChild(a)

    });
    return mainAnchor
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const card = document.createElement("div")
    card.classList.add("learner-card")

    const name = document.createElement("p")
    name.textContent = learner.fullName

    const learnerId = document.createElement("p")
    learnerId.textContent = `Learner ID: ${learner.id}`

    const dateBirth = document.createElement("p")
    dateBirth.textContent = `Date of Birth: ${dateBirth}`

    const language = document.createElement("p")
    const actualLang = languages.find(lang => lang.id === learner.favLanguage)
    language.textContent = `Favorite Language: ${actualLang.name}`

    card.appendChild(name)
    card.appendChild(learnerId)
    card.appendChild(dateBirth)
    card.appendChild(language)

    card.addEventListener("click", evt => {
      document.querySelectorAll(".learner-card").forEach(card => {
        card.classList.remove("active")
      })
      card.classList.add("active")
    })

    return card
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]

    learners.forEach(learner => {
      const newCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(newCard)

    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    //  ✨ do your magic here
    const footer = document.createElement('footer')

    const companyInfo = document.createElement("div")
    companyInfo.classList.add('company-info')

    const compName = document.createElement("p")
    compName.classList.add("company-name")
    compName.textContent = footerData.companyName

    const addy = document.createElement("p");
    addy.classList.add("address")
    addy.textContent = footerData.address

    const emailContact = document.createElement("div");
    emailContact.classList.add("contact-email")
    emailContact.innerHTML = `Email: <a href="mailto:${footerData.contactEmail}"> ${footerData.contactEmail}</a>`

    companyInfo.appendChild(compName)
    companyInfo.appendChild(addy)
    companyInfo.appendChild(emailContact)

    const socialInfo = document.createElement("div")
    for (let info in footerData.socialMedia) {
      let mediaLink = document.createElement("a")
      mediaLink.href = footerData.socialMedia[info]
      mediaLink.textContent = info.charAt(0).toUpperCase() + info.slice(1)
      socialInfo.appendChild(mediaLink)
    }

    let currentYear = "2024"
    let copyRight = document.createElement("div")
    copyRight.textContent = `© ${footerData.companyName.toUpperCase()} ${currentYear}`

    footer.appendChild(companyInfo)
    footer.appendChild(socialInfo)
    footer.appendChild(copyRight)

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  document.addEventListener("click", evt => {
    if (evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(card => card.classList.remove('active'))
    }
  })
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
