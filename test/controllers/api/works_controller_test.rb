require 'test_helper'

class Api::WorksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_works_index_url
    assert_response :success
  end

  test "should get show" do
    get api_works_show_url
    assert_response :success
  end

end
