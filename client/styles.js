const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '20px',
    // fontFamily: 'Graphik Webfont,-apple-system,BlinkMacSystemFont,Roboto,Droid Sans,Segoe UI,Helvetica,Arial,sans-serif',
    fontFamily: 'Helvetica-Light',
    fontWeight: '500',
    height: '790px',
    // overflow: 'hidden'
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '5px',
    paddingLeft: '8px'
  },
  avatar: {
    height: '50px',
    width: '50px',
    borderRadius: '50%'
  },
  userRating: {
    display: 'flex',
    flexDirection: 'column'
  },
  usernameContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',

  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '58px',
    fontSize: '14px',
    marginTop: '10px'
  },
  userNameDateDiv: {
    display: 'flex',
  },
  reviewDate: {
    paddingLeft: '10px',
  },
  reviewCommentDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
  },
  reviewComment: {
    marginTop: '0px',
    fontSize: '14px',
  },
  reviewStars: {
    margin: '0px',
    paddingTop: '5px'
  },
  itemLink: {
    paddingTop: '25px',
    paddingLeft: '10px',
    textOverflow: 'ellipsis',
    width: '370px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '12px',
    fontWeight: '300',
    lineHeight: '1.5'
  },
  card: {
    marginBottom: '30px',
  },
  modal: {
    display: 'none',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100%',
    // paddingLeft: '100px',

    position: 'fixed',
    left: '50%',
    top: '22%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '656.672px',
    maxWidth: '1200px',
    height: '40%',
    width: '80%',
    zIndex: 10,

  },
  modalWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch'
  },
  modalImg: {
    // minHeight: '500px',
    minWidth: '600px',
    height: 'auto',
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '656.672px',
  },
  modalImgContainer: {
    display: 'flex',
    order: 1,
  },

  modalReviewContainer: {
    width: 'auto',
    order: 2,
    backgroundColor: 'white',
    flex: '1 0 auto'
  },
  modalOverlay: {
    display: 'none',
    width: '100%',
    height: '100%',
    position: 'fixed',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    // transform: 'translate(-50%, -50%)',
    zIndex: 10,
    top: '0px',
    left: '0px',
    opacity: '0',
    transition: 'opacity 0.5s linear'

    // z-index:1000
  },
  userModalContainer: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '14px',
    paddingTop: '36px',
    paddingLeft: '30px',
    paddingRight: '12px',

  },
  modalItemLink: {
    paddingTop: '60px',
    paddingLeft: '10px',
    textOverflow: 'ellipsis',
    width: '370px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '14px',
    color: '#222',
    fontWeight: '300',
    lineHeight: '1.4'
  },
  modalExitButton: {
    right: '0',
    top: '0',
    position: 'absolute',
    float: 'right',
    color: '#222',
    zIndex: '10',
    height: '29px',
    width: '39px',
    backgroundColor: 'white'
  },
  reviewHeader: {
    alignItems: 'center'
  }
};


export default styles;