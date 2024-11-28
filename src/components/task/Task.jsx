import React, { useState, useEffect } from "react";
import data from "../../mocks/task.json"
import Button from "../ui/button/Button.jsx";
import Modal from "../widget/Modal.jsx";
import Form from "../form/Form.jsx"
import FormBtn from "../ui/form-buttons/FormBtn.jsx";
import "./Task.scss"

function Task() {

    const titleForm = "STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller";
    const modalTitleForm = "Новая задача";

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Данные формы:...');
    };

    const handleScroll = () => {
        if (window.scrollY > 1) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return (
        <section className="form-container">
            <div className={`form-header ${isScrolled ? "form-header-fixed" : ""}`}>
                <div className="form-header__title-box">
                    <h2 className="form-header__title">Подзадача</h2>
                    <Button
                        text="Создать"
                        className="button-general"
                        onClick={openModal} />
                </div>
                <FormBtn
                    onClick={handleSubmit}
                    className="pc-dflt"
                />
            </div>
            <div className="form-content" onScroll={handleScroll} >
                <Form
                    title={titleForm}
                    id="task-form"
                    data={data}
                />
            </div>
            <FormBtn
                onClick={handleSubmit}
                className="mobile-dflt"
            />

            {isModalOpen && (
                <Modal
                    onClose={closeModal}
                    modalTitle="Подзадача">
                    <Form
                        title={modalTitleForm}
                        id="task-modal-form"
                        data={data}
                    />
                </Modal>
            )}

        </section >
    )
}

export default Task;