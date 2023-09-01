export const FAQ = () => {
    return(
        <div id="FAQ" class="px-4 py-5 my-5 text-center">
        <h1 class="display-5 fw-bold">Frequently Asked Questions</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            We want you to be as prepared as possible for your visit. Click each question to see the answer. If you have a question that is not answered here, feel free to call us and ask!
          </p>
        </div>


<div class="accordion" id="accordionExample">


    <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            How do I tie my shoes???
        </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>We don't know!</strong> Maybe you should ask your mommy!
        </div>
        </div>
    </div>


    <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Can I get uhhhhhhhhhhhhh....
        </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>*cocks gun*</strong> get out of my house
        </div>
        </div>
    </div>


    <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Do you have cash? 
        </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
            <strong>eeeeee</strong> eeeeeeeeeee
        </div>
        </div>
    </div>


</div>




      </div>
    )
}