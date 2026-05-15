package core

type RedTideInformationError struct {
	IsRedTideInformationError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewRedTideInformationError(code string, msg string, ctx *Context) *RedTideInformationError {
	return &RedTideInformationError{
		IsRedTideInformationError: true,
		Sdk:              "RedTideInformation",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *RedTideInformationError) Error() string {
	return e.Msg
}
