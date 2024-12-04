import React from 'react';

function Faq() {
  return (
    <>
      <section className="faq">
		    <header className="head">
			    <h2>Personality</h2>
          <span><hr /><hr /><hr /></span>
        </header>
		    <hr id="faq-hr" />
		    <div className="panels">
          <button className="accordion">What are my core values</button>
          <div className="panel">
            <p>
              <ol>
                <li>Integrity: Being honest and having strong moral principles.</li>
						    <li>Respect: Valuing others, showing consideration and appreciation</li>
						    <li>Compassion: Showing empathy, kindness, and concern for others.</li>
						    <li>Fairness: Striving for justice and equality, ensuring impartiality.</li>
						    <li>Loyalty: Being faithful and committed to others, whether in personal relationships or organizational contexts.</li>
						    <li>Humility: Maintaining a modest view of one's own importance, being open to learning and growth.</li>
						    <li>Gratitude: Recognizing and appreciating the good in one's life and the contributions of others.</li>
						    <li>Authenticity: Being true to oneself, expressing one's genuine thoughts and feelings.
						    </li>
						    <li>Trustworthiness: Being reliable and deserving of others' trust.
						    </li>
						    <li>Adventure: Valuing experiences, exploration, and trying new things.
						    </li>
						    <li>Spirituality: Emphasizing the importance of spiritual beliefs and practices.
						    </li>
					    </ol>
				    </p>
			    </div>
          <button className="accordion">What are my passion and interest</button>
			    <div className="panel">
            <p>I love music and develops strong passion for it each day, it heals me.</p>
			    </div>
          <button className="accordion">What is my career</button>
          <div className="panel">
            <p>software developer</p>
          </div>
          <button className="accordion">What qualities do i value in a friend or a patner</button>
          <div className="panel">
            <p>
              <ol>
                <li>Trustworthiness</li>
                <li>Integrity</li>
                <li>Discipline</li>
                <li>Loyalty</li>
                <li>Humility</li>
              </ol>
            </p>
          </div>		
		    </div>
	    </section>
    </>
  )
}

export default Faq;