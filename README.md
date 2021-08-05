# .NET + Angular Boilerplate Project
This project is based on the official dotnet angular sample/template 
(generally `dotnet new angular -lang C#`), but has updated angular
versions and additionally comes with angular-material including a few 
example components.

It is meant to be some kind of generic webapp boiler plate ().  

## Start development
```
$ git clone https://github.com/ylabonte/dotnet-angular-boilerplate.git <your app dir>
$ cd <your app dir>
$ dotnet restore
```
The commands above will omit the project's npm dependencies. You can install
these either manually using npm directly or just build your project. The
build process will automatically invoke the installation of all node
dependencies.
```
$ dotnet build
```
You can use the watch command to run the application and auto-apply code
changes to the running instance. 
```
$ dotnet watch run
```