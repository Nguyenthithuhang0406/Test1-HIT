/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import edit from "../../../public/image/edit.png";
import deleteIcon from "../../../public/image/deleteIcon.png";
import "./SubjectList.scss";

const SubjectList = () => {
    const [id, setId] = useState(0);
    const [subject, setSubject] = useState([]);
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [describe, setDescribe] = useState("");

    const handleAdd = () => {
        setSubject([...subject, {
            image, name, describe
        }]);
       
        setImage("");
        setName("");
        setDescribe("");

    }

    const handleEditId = (id) => {
        setId(id);

        const updateSubject = [...subject];
        const itemEdit = updateSubject[id];

        setImage(itemEdit.image);
        setName(itemEdit.name);
        setDescribe(itemEdit.describe);

    }

    const handleEdit = () => {
        const updateSubject = [...subject];
        updateSubject[id] = {image, name, describe};
        setSubject(updateSubject);

        setImage("");
        setName("");
        setDescribe("");
    }

    const handleDelete = (id) => {
        const newSubject = subject.filter((item, index) => index !== id);
        setSubject(newSubject);
    }
    return (
        <div className='subject'>
            <div className='title'>
                <p className='title-p'><b>Quản lý môn học</b></p>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='item-form'>
                    <label>Link ảnh môn học: </label>
                    <br />
                    <input value={image} type="text" onChange={(e) => setImage(e.target.value.toString())} placeholder='Nhập link ảnh' />
                </div>

                <div className='item-form'>
                    <label>Tên môn học:</label>
                    <br />
                    <input value={name} type='text' onChange={(e) => setName(e.target.value)} placeholder='Nhập tên môn học' />
                </div>
                
                <div className='item-form'>
                    <label>Mô tả môn học: </label>
                    <br />
                    <input value={describe} type='text' onChange={(e) => setDescribe(e.target.value)} placeholder='Nhập mô tả chi tiết môn học' />
                </div>
                <div className='button'>
                    <button className='button-add' type='submit' onClick={handleAdd}>Thêm môn học</button>
                    <button className='button-edit' type='submit' onClick={handleEdit}>Cập nhật môn học</button>
                </div>
            </form>
            <div className='subject-list'>
                {subject && subject.map((item, index) => {
                    return <div className='subject-item' key={index}>
                            <img src={item.image} className='image-item'/>
                            <div className='content'>
                                <p className='name-item'><b>{item.name}</b></p>
                                <div className='describe-item'><b>Mô tả</b>: {item.describe}</div>
                            </div>
                            <div className='icon'>
                                <img src={edit} onClick={() => handleEditId(index)} className='icon-item'/>
                                <img src={deleteIcon} onClick={() => handleDelete(index)} className='icon-item'/>
                            </div>
                    </div>

                })}
            </div>

        </div>
    )
}

export default SubjectList;
