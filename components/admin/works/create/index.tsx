import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IWork } from "@/@types/work"
import { CldUploadButton } from "next-cloudinary";

interface ICloudinaryUploadResult {
    info?: {
        public_id: string;
    };
}

interface ICloudinaryWidget { }

const CreateWorkForm: React.FC = () => {
    const [work, setWork] = useState<IWork>({
        _id: "",
        title: '',
        tag: '',
        coverImage: ''
    });

    const [isUploading, setIsUploading] = useState<boolean>(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setWork(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { title, tag, coverImage } = work

        try {
            const response = await axios.post('/api/works',
                {
                    title,
                    tag,
                    coverImage
                });

            alert('Work created successfully!');
        } catch (error) {
            // @ts-ignore
            alert('Error creating work: ' + error.message);
        }
    };

    useEffect(() => {
        console.log(work.coverImage);
    }, [work.coverImage]);

    const uploadedCloudinary = (result: ICloudinaryUploadResult, widget: ICloudinaryWidget) => {
        setIsUploading(true);

        if (result.info) {
            // @ts-ignore
            setWork(prevWork => ({
                ...prevWork,
                coverImage: result.info.public_id,
            }));
        }

        setIsUploading(false);
    };


    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="title">Title:</label>
                <input className="mt-1 block w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500" type="text" name="title" value={work.title} onChange={handleInputChange} required />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="tag">Tag:</label>
                <select className="mt-1 block w-full border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500" name="tag" value={work.tag} onChange={handleInputChange} required>
                    <option value="">Select a tag</option>
                    <option value="JS">JS</option>
                    <option value="PHP">PHP</option>
                    <option value="HTML/CSS">HTML/CSS</option>
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="coverImage">Cover Image:</label>
                <div className="mt-1">
                    <CldUploadButton
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onUpload={uploadedCloudinary}
                        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                    />
                </div>
            </div>
            <button className={`mt-4 px-6 py-2 text-white rounded focus:outline-none ${!work.coverImage || isUploading ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`} type="submit" disabled={!work.coverImage || isUploading}>Create Work</button>
        </form>
    );
};

export default CreateWorkForm
