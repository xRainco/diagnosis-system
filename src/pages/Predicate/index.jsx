
import './index.css'
import { useState } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import { Upload, Image, Button } from "antd"

  
export default function Predicate(){

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileListOne, setFileListOne] = useState([]);
  const [fileListTwo, setFileListTwo] = useState([]);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChangeOne = ({ fileList: newFileList }) => setFileListOne(newFileList);
  const handleChangeTwo = ({ fileList: newFileList }) => setFileListTwo(newFileList);
  const uploadButton = (
    <Button
    type='primary'
    >
      <PlusOutlined />
        上传图像
    </Button>
  );
  return(
    <div className='predicate-container'>
      <div className='predicate-header'>
        <div className='title'>
          <span className='title-content'>眼科疾病智能诊断系统</span>
        </div>
      </div>
      <div className='predicate-body'>
        <div className='image-upload-container'>
          <Upload
          className='image-upload'
          // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileListOne}
          onPreview={handlePreview}
          onChange={handleChangeOne}
        >
          {fileListOne.length == 1 ? null : uploadButton}
          </Upload>
          <Upload
            className='image-upload'
            // action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileListTwo}
            onPreview={handlePreview}
            onChange={handleChangeTwo}
          >
            {fileListTwo.length == 1 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: 'none',
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(''),
              }}
              src={previewImage}
            />
          )}
        </div>
        <div className='image-result'></div>
      </div>
      <div className='predicate-footer'>
        <div className='function-select'></div>
        <div className='echart-dom'></div>
      </div>
    </div>
  )
}
