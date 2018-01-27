class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
  end

  def new
  end

  def create
    @student = Student.new
    @student.img_url = params[:img_url]
    @student.name = params[:name]
    @student.house_id = sorting_hat
    if @student.save
      redirect_to '/'
    else
      render :new
    end
  end

  def sorting_hat
    House.ids.sample
  end
end
