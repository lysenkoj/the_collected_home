import React, { Component } from 'react';
import { connect } from 'react-redux';
import addPhoto from '../reducers/photo';
import store from '../store';


/* -----------------    DUMB COMPONENT     ------------------ */

const DumbUploader = ({closeImageUploader, imgUrl, uploader}) => (
  <div className="previewComponent">
    <form id="uploadForm"
          encType="multipart/form-data"
          action="/api/upload"
          method="post"
          onSubmit={(e) => uploader(e)}>
      <input type="file" name="userPhoto" multiple />
      <input type="submit" value="Upload Image" name="submit"/>
      <input type='text' id='random' name='random'/>
      <br/>
      <span id = "status"></span>
    </form >
  </div>
);

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */

class ImageUpload2 extends Component {
  constructor(props) {
    super(props);

  this.closeImageUploader = this.closeImageUploader.bind(this);
  this.uploader = this.uploader.bind(this);

  }

  closeImageUploader(evt){
    evt.preventDefault();
    const el = document.querySelector('div.previewComponent');

    el.style.display = 'none';
  }

  uploader(evt){
    console.log(evt);
    evt.preventDefault();
    let status = document.querySelector('span#status');

    status.text = 'File is uploading...';
    store.dispatch(this.props.addPhotos())
  }

  render() {
    return (
      <DumbUploader
        imgUrl = { this.props.imgUrl}
        closeImageUploader = { this.closeImageUploader }
        uploader = { this.uploader }
      />
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatchToProps = (dispatch) => ({
  addPhotos: (photos) =>  dispatch(addPhoto(photos))
});

export default connect(null, mapDispatchToProps)(ImageUpload2);


// $(document).ready(function() {
//      $('#uploadForm').submit(function() {
//         $("#status").empty().text("File is uploading...");
//         $(this).ajaxSubmit({
//             error: function(xhr) {
//           status('Error: ' + xhr.status);
//             },
//             success: function(response) {
//         console.log(response)
//             $("#status").empty().text(response);
//             }
//     });
//     return false;
//     });