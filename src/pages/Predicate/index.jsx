
import './index.less'
import { useState } from 'react'
import { PlusOutlined, CameraTwoTone, CloudTwoTone, LoadingOutlined, CheckCircleTwoTone, PlayCircleTwoTone,PictureTwoTone, PieChartTwoTone,CopyTwoTone,PhoneTwoTone } from '@ant-design/icons'
import { Upload, Image, Button, Steps, Descriptions, Table } from "antd"


  
export default function Predicate(){
  const columns = [
    {
      title: '编号',
      dataIndex: 'name',
      className: 'predicate-table-th',
      align: 'center'
    },
    {
      title: '类别',
      dataIndex: 'age',
      className: 'predicate-table-th',
      align: 'center'
    },
    {
      title: '疾病类型',
      dataIndex: 'address',
      className: 'predicate-table-th',
      align: 'center'
    },
    {
      title: '置信度',
      dataIndex: 'address',
      className: 'predicate-table-th',
      align: 'center'
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },{
      key: '5',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
    {
      key: '5',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },{
      key: '5',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '6',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ];
  const desciptItems = [
    {
      key: 'name',
      label: '姓名',
      children: '王张李',
    },
    {
      key: 'sex',
      label: '性别',
      children: '女',
    },
    {
      key: 'age',
      label: '年龄',
      children: '23',
    },
    {
      key: 'result',
      label: '诊断结果',
      children: '眼疾',
    },
    {
      key: 'suggestion',
      label: '治疗建议',
      children: '保证睡眠',
    }
  ];
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
    color='cyan'
    variant="solid"
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
        <div className='image-result'>
          <div className='image-result-step'>
            <Steps
              size='small'
              current={1}
              items={[
                {
                  title: '上传成功',
                  status: 'finish',
                  icon: <CloudTwoTone />,
                },
                {
                  title: '模型加载中',
                  status: 'process',
                  icon: <LoadingOutlined />,
                },
                {
                  title: '完成',
                  status: 'finish',
                  icon:  <CheckCircleTwoTone />,
                },
              ]}
            />
          </div>
          <div className='image-result-content'>
              <Descriptions 
              column={1}
              items={desciptItems}
              />
          </div>
        </div>
      </div>
      <div className='predicate-footer'>
        <div className='result-table-container'>
            <div className='result-table-title'>诊断结果信息</div>
            <div className='result-table'>
              <Table
              size='small'
              columns={columns}
              dataSource={data}
              scroll={{y:160}}
              pagination={false}
              bordered={true}
              />         
            </div>
        </div>
        <div className='functon-btn'>
          
          <div className='btn-left'>
            <div>
              <Button color='cyan'variant="outlined">
              <PictureTwoTone />开始智能识别
              </Button>
            </div>
            <div>
            <Button color='cyan'variant="outlined">
              <PlayCircleTwoTone />保存结果数据
              </Button>
            </div>
            <div>
            <Button color='cyan'variant="outlined">
              <PieChartTwoTone />数据可视化表
              </Button>
            </div>
          </div>
          <div className='btn-right'>
            <div>
            <Button color='cyan'variant="outlined">
                <CopyTwoTone />查看结果图片
              </Button>
            </div>
            <div>
            <Button color='cyan'variant="outlined">
                <PhoneTwoTone />咨询在线医师
              </Button>
            </div>
            <div>
            <Button color='cyan'variant="outlined" >
                <CameraTwoTone />录制眼部视频
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
