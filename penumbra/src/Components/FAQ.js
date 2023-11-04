export const FAQ = () => {

    return(
    <div id="FAQ" class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Frequently Asked Questions</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            We want you to be as prepared as possible for your visit. Click each question to see the answer. If you have a question that is not answered here, feel free to call us and ask!
          </p>
        </div>

        <div class="accordion" id="accordionExample" autofocus="false">

            <div class="accordion-item" autofocus="false">
                <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    How do I make an appointment?
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="">
                <div class="accordion-body">
                    <strong>Reach out directly to your desired artist</strong>  for a consultation via their contact information on the artist page. Please provide your first and last name, your tattoo design idea and placement in your message, so the artist can provide you with as much information as possible!
                </div>
                </div>
            </div>

            <div class="accordion-item" autofocus="false">
                <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What do I do if I need to cancel my appointment?
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="">
                <div class="accordion-body">
                    We understand that circumstances occur outside of our control that could mean you will need to cancel your appointment. Please inform your artist of your cancellation a minimum of 1 hour prior to your scheduled time, although the sooner the better. In the event of your cancellation, it will be up to you to contact the regarding rescheduling. Deposits are nonrefundable per shop policy, and failing to notify the artist of your cancellation could forfeit your deposit. Deposits expire in 90 days unless you have made arrangements with the artist prior to that expiration, so please reschedule promptly.
                </div>
                </div>
            </div>


            <div class="accordion-item" autofocus="false">
                <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    How do you price your tattoos?
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="">
                <div class="accordion-body">
                    Our artists price their own work individually, any pricing questions should be directed towards your artist. The minimum shop price is 50$ and can vary based on the design and placement. A minimum deposit of 100$ (or the exact price of the tattoo if less than 100$) is required for an appointment and will come off the total price of your tattoo.
                </div>
                </div>
            </div>

            <div class="accordion-item" autofocus="false">
                <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Do you all do walk-ins? 
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="">
                <div class="accordion-body">
                    <strong>Yes, walk-ins are welcome!</strong> Call the shop ahead of time or something, idk I just make the website.
                </div>
                </div>
            </div>

            <div class="accordion-item" autofocus="false">
                <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Will you copy this exact design for me?
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="">
                <div class="accordion-body">
                    I draw my designs custom for my clients. If you really like a particular design concept, I would be happy to redesign it for you in a way that honors the concept but respects the artist who created the original piece. Everyone deserves to have a piece that is unique to them and no one wants to see their tattoo on someone else (unless of course that was intended.)
                </div>
                </div>
            </div>

            <div class="accordion-item" autofocus="false">
                <h2 class="accordion-header" id="headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    QQQQQ
                </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="">
                <div class="accordion-body">
                    AAAAA
                </div>
                </div>
            </div>
        </div>
      </div>
    )
}