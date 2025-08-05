module.exports = {
  COMMON: {
    SERVER_ERROR: {
      CODE: 500,
      MSG: 'Internal Server Error',
    },
    UNAUTHORIZED: {
      CODE: 401,
      MSG: 'Unauthorized',
    },
  },
  AUTH: {
    SIGNIN_SUCCESS: {
      CODE: 200,
      MSG: 'Successfully Logged in',
    },
    ROLE_CREATED: {
      CODE: 200,
      MSG: 'Role Created Successfully',
    },
    SIGNUP_ERROR: {
      CODE: 403,
      MSG: 'Authentication Error',
    },
    VIEW_USER_SUCCESS: {
      CODE: 200,
      MSG: 'User Profile Found',
    },
    VIEW_USER_NOT_FOUND: {
      CODE: 404,
      MSG: 'User Profile Not Found, Please try again',
    },
  },
  CANCEL_REQ: {
    ADD_SUCCESS: {
      CODE: 201,
      MSG: 'Your Request is Successfully Submitted. Please wait our team will contact you !',
    },
    UPDATE_SUCCESS: {
      CODE: 201,
      MSG: 'The Request Status has been updated successfully.',
    },
    GET_ALL_SUCCESS: {
      CODE: 201,
      MSG: 'Request List fetched successfully',
    },
    GET_SINGLE_SUCCESS: {
      CODE: 201,
      MSG: 'Request Item fetched successfully',
    },
    GET_SINGLE_FAILURE: {
      CODE: 404,
      MSG: 'Request for the Order ID is not Found',
    },
  },
  CART: {
    ADD_ALREADY_EXISTS: {
      CODE: 400,
      MSG: 'Item is already in your cart!',
    },
    ADD_SUCCESS: {
      CODE: 201,
      MSG: 'Item successfully added to your cart!',
    },
    VIEW_SUCCESS: {
      CODE: 200,
      MSG: 'Cart Items successfully fetched!',
    },
    UPDATE_INC_SUCCESS: {
      CODE: 201,
      MSG: 'Item quantity increased successfully!',
    },
    UPDATE_DEC_SUCCESS: {
      CODE: 201,
      MSG: 'Item quantity decreased successfully!',
    },
    UPDATE_DEC_ERROR: {
      CODE: 400,
      MSG: 'The minimum cart value is 1.',
    },
    DELETE_NOT_FOUND: {
      CODE: 404,
      MSG: 'Cart Item not found !',
    },
    DELETE_SUCCESS: {
      CODE: 200,
      MSG: 'Item successfully removed from your cart.',
    },
    DELETE_ALL_NOT_FOUND: {
      CODE: 404,
      MSG: 'Cart Item not found !',
    },
    DELETE_ALL_SUCCESS: {
      CODE: 200,
      MSG: 'All items have been successfully removed from your cart.',
    },
    SYNC_SUCCESS: {
      CODE: 201,
      MSG: 'Items successfully added to your cart!',
    },
  },
  CATEGORY: {
    ADD_SUCCESS: {
      CODE: 201,
      MSG: 'Category created successfully!',
    },
    VIEW_SUCCESS: {
      CODE: 200,
      MSG: 'Categories fetched successfully.',
    },
    UPDATE_NOT_FOUND: {
      CODE: 404,
      MSG: 'The category not found',
    },
    UPDATE_SUCCESS: {
      CODE: 200,
      MSG: 'Category updated successfully!',
    },
    GET_BY_ID_NOTFOUND: {
      CODE: 404,
      MSG: 'The category not found',
    },
    GET_BY_ID_SUCCESS: {
      CODE: 200,
      MSG: 'The category fetched successfully.',
    },
    DELETE_NOT_FOUND: {
      CODE: 404,
      MSG: 'The category not found',
    },
    DELETE_SUCCESS: {
      CODE: 200,
      MSG: 'Category deleted successfully!',
    },
  },
  COUPON: {
    ADD_SUCCESS: {
      CODE: 201,
      MSG: 'Coupon added successfully.',
    },
    ADD_FAILURE: {
      CODE: 403,
      MSG: 'Coupon code is Already Available Please choose different.',
    },
    VIEW_SUCCESS: {
      CODE: 200,
      MSG: 'Coupons fetched successfully.',
    },
    UPDATE_NOT_FOUND: {
      CODE: 404,
      MSG: 'The coupon not found',
    },
    UPDATE_SUCCESS: {
      CODE: 200,
      MSG: 'Coupon updated successfully!',
    },
    GET_BY_ID_NOTFOUND: {
      CODE: 404,
      MSG: 'The coupon not found',
    },
    GET_BY_ID_SUCCESS: {
      CODE: 200,
      MSG: 'The coupon fetched successfully.',
    },
    DELETE_NOT_FOUND: {
      CODE: 404,
      MSG: 'The coupon not found',
    },
    DELETE_SUCCESS: {
      CODE: 200,
      MSG: 'Coupon deleted successfully!',
    },
    APPLY: {
      NOT_FOUND: {
        CODE: 404,
        MSG: 'Coupon not found',
      },
      NOT_STARTED: {
        CODE: 404,
        MSG: 'Coupon offer not started yet',
      },
      EXPIRED: {
        CODE: 404,
        MSG: 'Coupon has expired',
      },
      USAGE_LIMIT: {
        CODE: 404,
        MSG: 'Coupon usage limit exceeded',
      },
      MINIMUM_SPENT: {
        CODE: 404,
        MSG: 'Minimum spend requirement not met',
      },
      INVALID_COUPON: {
        CODE: 404,
        MSG: 'Invalid coupon',
      },
      SUCCESS: {
        CODE: 200,
        MSG: 'Coupon applied successfully',
      },
    },
  },
  ORDER: {
    ADD: {
      SUCCESS: {
        CODE: 201,
        MSG: 'Order Created Successfully ',
      },
      CART_LENGTH_ERROR: {
        CODE: '400',
        MSG: 'Oops !. There is no item in your cart. Please check and order again ',
      },
    },
    VIEW: {
      SUCCESS: {
        CODE: 200,
        MSG: 'Orders List Fetched Successfully.',
      },
    },
    VIEW_BY_ID: {
      SUCCESS: {
        CODE: 200,
        MSG: 'Order Details Fetched Successfully.',
      },
      FAILURE: {
        CODE: 404,
        MSG: 'Order Details Not Found',
      },
    },
    SHIP_ROCKET_SYNC: {
      FAILURE: {
        CODE: 404,
        MSG: 'Order Details Not Found',
      },
      SUCCESS: {
        CODE: 200,
        MSG: 'Order Status updated',
      },
      SUCCESS_TRACK: {
        CODE: 200,
        MSG: 'Order Tracking Details Updated',
      },
      FAILURE_TRACK: {
        CODE: 403,
        MSG: 'Please Update in Shiprocket dashboard The status is not available',
      },
    },
  },
  PRODUCT: {
    ADD_SUCCESS: {
      CODE: 201,
      MSG: 'Product created successfully!',
    },
    VIEW_SUCCESS: {
      CODE: 200,
      MSG: 'Products fetched successfully.',
    },
    UPDATE_NOT_FOUND: {
      CODE: 404,
      MSG: 'The product not found',
    },
    UPDATE_SUCCESS: {
      CODE: 200,
      MSG: 'Product updated successfully!',
    },
    GET_BY_ID_NOTFOUND: {
      CODE: 404,
      MSG: 'The product not found',
    },
    GET_BY_ID_SUCCESS: {
      CODE: 200,
      MSG: 'The product fetched successfully.',
    },
    DELETE_NOT_FOUND: {
      CODE: 404,
      MSG: 'The product not found',
    },
    DELETE_SUCCESS: {
      CODE: 200,
      MSG: 'Product deleted successfully!',
    },
    ATTRIBS: {
      ADD_SUCCESS: {
        CODE: 201,
        MSG: 'Attributes created successfully!',
      },
      NOT_FOUND: {
        CODE: 404,
        MSG: 'The attribute not found',
      },
      DELETE_SUCCESS: {
        CODE: 200,
        MSG: 'Attributes deleted successfully!',
      },
      UPDATE_SUCCESS: {
        CODE: 200,
        MSG: 'Attributes updated successfully!',
      },
    },
    VARIATIONS: {
      ADD_SUCCESS: {
        CODE: 201,
        MSG: 'Variations created successfully!',
      },
      NOT_FOUND: {
        CODE: 404,
        MSG: 'The variation not found',
      },
      DELETE_SUCCESS: {
        CODE: 200,
        MSG: 'Variations deleted successfully!',
      },
      UPDATE_SUCCESS: {
        CODE: 200,
        MSG: 'Variations updated successfully!',
      },
    },
  },
  UTILS: {
    DELETE_IMAGE: {
      NOT_FOUND: {
        CODE: 404,
        MSG: 'Requested Image is not found !',
      },
      SUCCESS: {
        CODE: 200,
        MSG: 'Image Deleted Successfully !',
      },
    },
    GEN_VARIATION: {
      PRODUCT_NOT_FOUND: {
        CODE: 404,
        MSG: 'Product not found !',
      },
      SUCCESS: {
        CODE: 200,
        MSG: 'Variations Generated Successfully !',
      },
    },
  },
  WISHLIST: {
    ADD_SUCCESS: {
      CODE: 201,
      MSG: 'Item added to wishlist !',
    },
    REMOVE_SUCCESS: {
      CODE: 201,
      MSG: 'Item removed from wishlist !',
    },
    VIEW_SUCCESS: {
      CODE: 200,
      MSG: 'Wishlist fetched successfully.',
    },
    DELETE_SUCCESS: {
      CODE: 200,
      MSG: 'All items have been successfully removed from your wishlist.',
    },
  },

  WEBHOMECONFIG: {
    ADD_BANNER_SUCCESS: {
      CODE: 201,
      MSG: 'Banner Created Successfully',
    },
    DELETE_BANNER_SUCCESS: {
      CODE: 200,
      MSG: 'Banner Delete Successfully',
    },
    FEATURE_CONFIG_UPDATE_SUCCESS: {
      CODE: 200,
      MSG: 'Feature Configuration Updated SuccessFully',
    },
    GET_SUCCESS: {
      CODE: 200,
      MSG: 'Configuration Fetched SuccessFully',
    },
  },
};
