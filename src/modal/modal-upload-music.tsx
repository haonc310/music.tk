import React from 'react';
import { Form, Input, Button, Upload } from 'antd';

import { BsMic } from 'react-icons/bs';
import { UploadOutlined } from '@ant-design/icons';
import { BsMusicNoteList } from 'react-icons/bs';
import { BsMusicPlayerFill } from 'react-icons/bs';
import { FiYoutube } from 'react-icons/fi';
import { useUploadMusic } from '../hooks';
import { useTranslation } from 'react-i18next';

export const ModalUploadMusic = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const {
    newImage,
    handleUploadMusicImage,
    handleUploadMusicSource,
    handlePostUploadMusic,
    loadingUploadMusic,
  } = useUploadMusic();

  return (
    <div className="modal-upload" onClick={(event) => event.stopPropagation()}>
      <Form onFinish={handlePostUploadMusic} form={form}>
        {/* <h4 className=" text-white">Tên bài hát</h4> */}
        {/* <Form.Item
          name="name_music"
          rules={[
            {
              required: true,
              message: 'Nhập tên bài hát',
              whitespace: true,
              type: 'string',
            },
            {
              min: 1,
              max: 40,
              message: 'Vui lòng nhập đúng tên bài hát!',
            },
          ]}
        >
          <Input
            prefix={<BsMusicNoteList className="icon-input" />}
            placeholder="Nhập tên bài hát"
            className="h-[35px]"
          />
        </Form.Item> */}
        <h4 className=" text-white">{t('name-singer')}</h4>
        <Form.Item
          name="name_singer"
          rules={[
            {
              required: true,
              message: 'Nhập tên nghệ sĩ',
              whitespace: true,
              type: 'string',
            },
            {
              min: 1,
              max: 30,
              message: 'Vui lòng nhập đúng tên nghệ sĩ!',
            },
          ]}
        >
          <Input
            prefix={<BsMic className="icon-input" />}
            placeholder={t('name-singer')}
            className="h-[35px]"
          />
        </Form.Item>
        <h4 className=" text-white">{t('name-category')}</h4>
        <Form.Item
          name="category"
          rules={[
            {
              required: true,
              message: 'Nhập tên thể loại',
              whitespace: true,
              type: 'string',
            },
            {
              min: 1,
              max: 50,
              message: 'Vui lòng nhập đúng tên thể loại!',
            },
          ]}
        >
          <Input
            prefix={<BsMusicPlayerFill className="icon-input" />}
            placeholder={t('name-category')}
            className="h-[35px]"
          />
        </Form.Item>
        <h4 className=" text-white">Link Youtube</h4>

        <Form.Item
          name="link_mv"
          rules={[
            {
              required: true,
              message: 'Nhập Link Youtube',
              whitespace: true,
              type: 'string',
            },
            {
              min: 1,
              max: 100,
              message: 'Vui lòng nhập đúng Link Youtube!',
            },
          ]}
        >
          <Input
            prefix={<FiYoutube className="icon-input" />}
            placeholder="https://youtu.be/FN7ALfpGxiI"
            className="h-[35px]"
          />
        </Form.Item>
        {/* <Form.Item
          name="src_music"
          rules={[
            {
              required: true,
              message: 'Vui lòng chọn một bài hát tải lên!',
            },
          ]}
          getValueFromEvent={handleUploadMusicSource}
          valuePropName="fileList"
        >
          <Upload maxCount={1} accept="audio/mpeg" listType="picture">
            <Button
              style={{ backgroundColor: '#ff3465', border: '1px solid #ff3465', color: '#ffff' }}
              icon={<UploadOutlined />}
            >
              Click chọn bài hát
            </Button>
          </Upload>
        </Form.Item> */}

        {/* <Form.Item
          name="image_music"
          valuePropName="fileList"
          rules={[{ required: true, message: 'Vui lòng chọn một tấm ảnh cho bài hát!' }]}
          getValueFromEvent={handleUploadMusicImage}
        >
          <Upload
            maxCount={1}
            accept=".jpg, .jpeg, .png"
            listType="picture"
            onChange={handleUploadMusicImage}
          >
            <Button
              style={{ backgroundColor: '#ff3465', border: '1px solid #ff3465', color: '#ffff' }}
              icon={<UploadOutlined />}
            >
              Click chọn poster
            </Button>
          </Upload>
        </Form.Item> */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="w-full"
            style={{ height: '35px', marginTop: '10px' }}
            loading={loadingUploadMusic}
          >
            {t('upload-music')}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
