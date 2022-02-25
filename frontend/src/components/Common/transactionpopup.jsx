import React from 'react';

function transactionpopup() {
    return (
        <>
            <div id="custom-modal" class="custom-modal">
                <div id="custom-modal-close" class="custom-modal--bg"></div>
                <div class="custom-modal--container">
                    <div class="custom-modal--content">
                        <div class="custom-modal--cancel">
                            <img src="./images/cross.png" alt="cancel" />
                        </div>
                        <div class="modal-content">
                            <form class="popup-form-container">
                                <select class="budget-dropdown mt-2">
                                    <option value="">Income or Expense</option>
                                    <option value="income">Income</option>
                                    <option value="expense">Expense</option>
                                </select>

                                <select class="budget-dropdown mt-2">
                                    <option value="">Budget Category</option>
                                </select>
                                <div class="budget-form">
                                    <div class="budget-input">
                                        <div class="mb-2">
                                            <label htmlFor="name">Name</label>
                                            <input
                                                name="name"
                                                class="custom-input-modal"
                                                type="text"
                                                placeholder="Name"
                                            />
                                        </div>
                                        <div class="date&cost">
                                            <label id="cost" htmlFor="cost">
                                                Cost
                                            </label>
                                            <input
                                                name="amount"
                                                class="custom-input-modal"
                                                type="number"
                                                min="1"
                                                placeholder="Cost"
                                            />

                                            <label id="cost" htmlFor="date">
                                                Date
                                            </label>
                                            <input class="custom-input-modal" type="date" />
                                        </div>
                                        <button class="custom-btn active">Add</button>)
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    }


export default transactionpopup;
